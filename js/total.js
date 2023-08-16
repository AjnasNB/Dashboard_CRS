// app.js

// Function to interact with the smart contract
async function getTotalReports() {
    const contractAddress = '0x81dA37F59413989b0B62f54E071a53268e27129b'; // Replace with the actual contract address
    const abi =[
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "AccessGranted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "AccessRevoked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "grantAccess",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "reportId",
                    "type": "string"
                }
            ],
            "name": "NewReportSubmitted",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_reportId",
                    "type": "string"
                }
            ],
            "name": "onlyAllowedReportEvent",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "reportId",
                    "type": "string"
                }
            ],
            "name": "OnlyAllowedReportSubmitted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "reportId",
                    "type": "string"
                }
            ],
            "name": "ReportReceived",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "reportId",
                    "type": "string"
                }
            ],
            "name": "ReportSubmitted",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "revokeAccess",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_district",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_Area",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_description",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_photoHash",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_videoHash",
                    "type": "string"
                }
            ],
            "name": "submitReport",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAddressesWithAccess",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllReportIds",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_reportId",
                    "type": "string"
                }
            ],
            "name": "getReportById",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "district",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "Area",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "title",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "photoHash",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "videoHash",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct AnonymousReportingSystem.Report",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTotalContractsDeployed",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ] // Replace with the actual contract ABI
  
    if ( window.ethereum === 'undefined') {
        alert('Metamask is not installed. Please install Metamask to use this app.');
        return;
    }
    // Create a Web3 instance
    const web3 = new Web3(window.ethereum);
  
    // Get the account from the current provider (Metamask)
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];
  
    // Create the contract instance
    const contract = new web3.eth.Contract(abi, contractAddress);

    try {
        // Call the getTotalContractsDeployed function in the smart contract
        const totalReports = await contract.methods.getTotalContractsDeployed().call({ from: account });
        console.log('Total Reports:', totalReports);
    
        // Update the h1 element with the total number of reports
        const totalReportsElement1 = document.getElementById('total-report1');
        totalReportsElement1.innerText = ` ${totalReports}`;
        const totalReportsElement2 = document.getElementById('total-report2');
        totalReportsElement2.innerText = ` ${totalReports}`;
        const totalReportsElement3 = document.getElementById('total-report3');
        totalReportsElement3.innerText = ` ${totalReports}`;
        const totalReportsElement4 = document.getElementById('notification-count');
        totalReportsElement4.innerText = ` ${totalReports}`;
    
        // Alert for successful login
        alert('Login successful!');
    
      } catch (error) {
        console.error('Error getting total reports:', error);
        // Alert for unsuccessful login
        alert('Login unsuccessful. Please check your authorization.');
      }
    }
    
    // Wait for the DOM to be loaded before calling the function
    document.addEventListener('DOMContentLoaded', async () => {
      try {
        // Request Metamask's permission to access the user's Ethereum account
        await window.ethereum.enable();
    
        // Call the function to get the total number of reports and update the UI
        getTotalReports();
      } catch (error) {
        console.error('Error initializing the app:', error);
        alert('Login unsuccessful. Please check your authorization.');

      }
    });
    
    
    
    
    