import Head from 'next/head';
import React, { useCallback, useEffect, useReducer } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

interface State {
    inputDevices: WebMidi.MIDIInput[];
    status: 'ready' | 'now playing' | 'complete';
}

type Action =
    | {
          type: 'updateInputDevices';
          payload: {
              inputDevices: WebMidi.MIDIInput[];
          };
      }
    | {
          type: 'play';
      }
    | {
          type: 'stop';
      };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'updateInputDevices':
            return {
                ...state,
                inputDevices: action.payload.inputDevices,
            };
        case 'play':
            return {
                ...state,
                status: 'now playing',
            };
        case 'stop':
            return {
                ...state,
                status: 'complete',
            };
    }
};

const Fallback: React.VFC<FallbackProps> = ({ error, resetErrorBoundary }) => (
    <>
        <div>{error?.message ?? 'Unexpected error'}</div>
        <button onClick={resetErrorBoundary}>Try again</button>
    </>
);

const Synth: React.VFC = () => {
    const [{ inputDevices, status }, dispatch] = useReducer(reducer, {
        inputDevices: [],
        status: 'ready',
    });

    useEffect(() => {
        navigator.requestMIDIAccess({ sysex: true }).then((midiAccess) => {
            const inputs = Array.from(midiAccess.inputs.values());
            inputs.forEach((input) => {
                input.addEventListener('midimessage', (event) => {
                    console.log('Note number', event.data[1]);
                });
            });
            dispatch({
                type: 'updateInputDevices',
                payload: { inputDevices: inputs },
            });
        });
    }, []);

    const onClick = useCallback(async () => {
        dispatch({ type: 'play' });

        const ctx = new AudioContext();

        const osc = new OscillatorNode(ctx);

        const real = new Float32Array(10);
        const imag = new Float32Array(10);
        for (let i = 0; i < 10; i++) {
            real[i] = 0;
            imag[i] = 0;
        }
        imag[1] = 1;
        imag[2] = 0.5;

        const waveTable = ctx.createPeriodicWave(real, imag);
        osc.setPeriodicWave(waveTable);

        const noteNum = 60;
        const freq = 440.0 * Math.pow(2.0, (noteNum - 69.0) / 12.0);
        osc.frequency.value = freq;

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.05;

        osc.connect(gainNode).connect(ctx.destination);

        osc.start();

        setTimeout(() => {
            osc.stop();
            dispatch({ type: 'stop' });
        }, 1000);
    }, []);

    return (
        <>
            <Head>
                <title>Synthesizer - Kodai</title>
            </Head>
            <div className="m-8">
                <h2 className="text-xl mb-2">Synthesizer</h2>
                <div className="my-2">
                    <p>Input devices:</p>
                    <ul className="list-disc list-inside">
                        {inputDevices.map((device) => (
                            <li key={device.id} className="mt-1">
                                {device.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={onClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
                >
                    play
                </button>
                <p>Status: {status}</p>
            </div>
        </>
    );
};

const SynthPage: React.VFC = () => (
    <ErrorBoundary FallbackComponent={Fallback}>
        <Synth />
    </ErrorBoundary>
);

export default SynthPage;
