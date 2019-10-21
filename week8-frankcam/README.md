
## Editing Remote Files using VS Code Remote

### Installing
In VS Code, hit `Ctrl-P` and paste
`ext install ms-vscode-remote.vscode-remote-extensionpack`

### Getting the Raspberry Pi IP
Connect the pi to a tv, open a terminal and run `ifconfig`

There should be a block like the following

```
wlan0     Link encap:Ethernet  HWaddr b8:27:eb:f2:ba:f5  
          inet addr:192.168.0.14  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: 2601:281:8300:ec00:bffe:cc6f:4cfc:97d3/64 Scope:Global
          inet6 addr: fe80::bb8e:660e:861b:c785/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:931 errors:0 dropped:325 overruns:0 frame:0
          TX packets:188 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:179820 (175.6 KiB)  TX bytes:27079 (26.4 KiB)
```

Here the ip address is `192.168.0.14`

### Connecting via SSH
`ssh pi@192.168.0.14`

# Motion Webcam Service

 ## Updating motion settings
 Edit the file below. You may need sudo permissions.

 `sudo gedit /etc/default/motion`

 ```
Make sure 'daemon' is ON.
Set 'framerate' anywhere in between 1000 to 1500.
Keep 'Stream_port' to 8081.
'Stream_quality' should be 100.
Change 'Stream_localhost' to OFF.
Change 'webcontrol_localhost' to OFF.
Set 'quality' to 100.
Set 'width' & 'height' to 640 & 480.
Set 'post_capture' to 5.
Press ctrl + x to exit. Type y to save and enter to conform.
Again type in the command 'sudo nano /etc/default/motion ' and press enter.

Set ' start_motion_daemon ' to yes. Save and exit.
 ```
 ## Restarting the Motion Service 
When new configuration is saved, the service must be restarted.
 `sudo service motion stop`
 `sudo service motion start`