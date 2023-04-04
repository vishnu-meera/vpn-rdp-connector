# vpn-rdp-connector

A Node.js command-line tool for connecting to a VPN and starting a Remote Desktop (RDP) session.

## Installation

Install the package globally using npm:

```bash
npm install -g vpn-rdp-connector

Usage

To connect to a VPN and start an RDP session, run the vpn command followed by the server and connection names:

vpn <serverName> <vpnConnectionName>

Replace <serverName> with the name or IP address of the server you want to connect to and <vpnConnectionName> with the name of the VPN connection.

Example

vpn my-server someconnection

This command will attempt to connect to the VPN named "someconnection" and start an RDP session to the server named "my-server".