#!/bin/sh -ex

ln -s /home/kodai/kodai-blog/launch-server.sh /opt/launch-server.sh
ln -s /home/kodai/kodai-blog/kodai-blog.service /etc/systemd/system/kodai-blog.service
systemctl enable kodai-blog
systemctl start kodai-blog
