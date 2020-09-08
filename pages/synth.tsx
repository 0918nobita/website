import Head from 'next/head';
import React, { useEffect, useReducer } from 'react';

interface State {
    inputDevices: WebMidi.MIDIInput[];
}

interface Action {
    type: 'updateInputDevices';
    payload: {
        inputDevices: WebMidi.MIDIInput[];
    };
}

const reducer = (_: State, action: Action): State => ({
    inputDevices: action.payload.inputDevices,
});

const SynthPage: React.FC = () => {
    const [{ inputDevices }, dispatch] = useReducer(reducer, {
        inputDevices: [],
    });

    useEffect(() => {
        navigator.requestMIDIAccess({ sysex: true }).then((midiAccess) => {
            const inputs = Array.from(midiAccess.inputs.values());
            dispatch({
                type: 'updateInputDevices',
                payload: { inputDevices: inputs },
            });
        });
    }, []);

    return (
        <>
            <Head>
                <title>Synthesizer - Kodai</title>
            </Head>
            <h2>Synthesizer</h2>
            <p>Input devices:</p>
            <ul>
                {inputDevices.map((device) => (
                    <li key={device.id}>{device.name}</li>
                ))}
            </ul>
        </>
    );
};

export default SynthPage;
