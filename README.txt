ATAG One 2.0 Thermostat for Homey

This Homey app allows you to control your ATAG One 2.0 thermostat via local network connection.

FEATURES
--------
- Read current room temperature
- Set target temperature
- Monitor water pressure
- Monitor boiler heating status
- Flow cards for automation

REQUIREMENTS
------------
- Homey Pro (local platform)
- ATAG One 2.0 thermostat
- Thermostat and Homey on the same local network

FINDING YOUR THERMOSTAT
-----------------------
Auto-discovery of the ATAG One 2.0 is not possible at this moment. You will need
to find the IP address and MAC address manually.

You can use a network scanning tool like "Advanced IP Scanner" (Windows) or
"Fing" (mobile) to find your thermostat on the network.

The ATAG One thermostat appears in the network with a name like:
  One_xx-xx-xxx-xxx

Where xx-xx-xxx-xxx represents part of the device identifier.

Once you find the device, note down:
- The IP address (e.g., 192.168.1.100)
- The MAC address (e.g., AA:BB:CC:DD:EE:FF)

SETUP
-----
1. Install the app on your Homey
2. Add a new device and select "ATAG One 2.0"
3. Enter the following information:
   - IP Address: The local IP address of your thermostat
   - MAC Address: The MAC address of your thermostat (used as unique identifier)
   - Device Name: Name shown on thermostat when authorizing (default: Homey)
   - Email Address: Email for authentication
4. Click "Connect"
5. Press "YES" on your ATAG One thermostat to authorize the connection
6. The device will be added to Homey

CAPABILITIES
------------
- Target temperature (4-27°C, 0.5° steps)
- Measured room temperature
- Water pressure (mbar)
- Boiler heating status

LANGUAGES
---------
- English
- Dutch (Nederlands)
- German (Deutsch)
- French (Français)

TECHNICAL DETAILS
-----------------
- Communication: HTTP on port 10000
- Protocol: Local API (no cloud required)
- Poll interval: Configurable (10-300 seconds)

TROUBLESHOOTING
---------------
- Ensure your thermostat is connected to your local network
- Verify the IP address is correct (check your router's DHCP table)
- Make sure Homey and the thermostat are on the same network/VLAN
- If authorization fails, try pressing "YES" on the thermostat and reconnect

AUTHOR
------
Alwin ter Stege
alwin@terstege.info

VERSION
-------
1.0.0
