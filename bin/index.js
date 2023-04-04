const { exec } = require("child_process");

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("Please provide serverName and vpnConnectionName as command line arguments.");
  process.exit(1);
}

const serverName = args[0];
const vpnConnectionName = args[1];

// Connect to the VPN
exec(`rasdial ${vpnConnectionName}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`rasdial output: ${stdout}`);
  
  // Check if the connection was successful
  if (stdout.includes("Command completed successfully")) {
    console.log("VPN connection success");
  } else {
    console.log("VPN connection failed");
  }
  
  // Start RDP session
  exec(`mstsc.exe /v:${serverName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
});
