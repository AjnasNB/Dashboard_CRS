const grantAccessForm = document.getElementById("grantAccessForm");
const revokeAccessForm = document.getElementById("revokeAccessForm");
const web3 = new Web3(window.ethereum);
grantAccessForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(grantAccessForm);
  const metamaskId = formData.get("metamaskId");
  await grantAccess(metamaskId);
});

revokeAccessForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(revokeAccessForm);
  const metamaskId = formData.get("metamaskId");
  await revokeAccess(metamaskId);
});

async function grantAccess(metamaskId) {
  try {
    
    const contractAddress = "0x6dA7cEa9C3EC0dafe574aBB85fFf746A7626E816"; // Replace with your deployed contract address
    const contractABI = [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "AccessGranted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "AccessRevoked",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
        name: "grantAccess",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "NewReportSubmitted",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_reportId",
            type: "string",
          },
        ],
        name: "onlyAllowedReportEvent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "caller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "OnlyAllowedReportSubmitted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "ReportReceived",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "ReportSubmitted",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
        name: "revokeAccess",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_district",
            type: "string",
          },
          {
            internalType: "string",
            name: "_Area",
            type: "string",
          },
          {
            internalType: "string",
            name: "_title",
            type: "string",
          },
          {
            internalType: "string",
            name: "_description",
            type: "string",
          },
          {
            internalType: "string",
            name: "_photoHash",
            type: "string",
          },
          {
            internalType: "string",
            name: "_videoHash",
            type: "string",
          },
        ],
        name: "submitReport",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getAddressesWithAccess",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getAllReportIds",
        outputs: [
          {
            internalType: "string[]",
            name: "",
            type: "string[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_reportId",
            type: "string",
          },
        ],
        name: "getReportById",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "district",
                type: "string",
              },
              {
                internalType: "string",
                name: "Area",
                type: "string",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "photoHash",
                type: "string",
              },
              {
                internalType: "string",
                name: "videoHash",
                type: "string",
              },
            ],
            internalType: "struct AnonymousReportingSystem.Report",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getTotalContractsDeployed",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ]; // Replace with your contract ABI
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const web3 = new Web3(window.ethereum);
  
    // Get the account from the current provider (Metamask)
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];

    await contract.methods.grantAccess(metamaskId).send({ from: account });

    alert("Access granted successfully!");
  } catch (error) {
    alert("Error granting access: " + error.message);
  }
}

async function revokeAccess(metamaskId) {
  try {
    
    const contractAddress = "0x6dA7cEa9C3EC0dafe574aBB85fFf746A7626E816"; // Replace with your deployed contract address
    const contractABI = [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "AccessGranted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "AccessRevoked",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
        name: "grantAccess",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "NewReportSubmitted",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_reportId",
            type: "string",
          },
        ],
        name: "onlyAllowedReportEvent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "caller",
            type: "address",
          },
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "OnlyAllowedReportSubmitted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "ReportReceived",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "reportId",
            type: "string",
          },
        ],
        name: "ReportSubmitted",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
        name: "revokeAccess",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_district",
            type: "string",
          },
          {
            internalType: "string",
            name: "_Area",
            type: "string",
          },
          {
            internalType: "string",
            name: "_title",
            type: "string",
          },
          {
            internalType: "string",
            name: "_description",
            type: "string",
          },
          {
            internalType: "string",
            name: "_photoHash",
            type: "string",
          },
          {
            internalType: "string",
            name: "_videoHash",
            type: "string",
          },
        ],
        name: "submitReport",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getAddressesWithAccess",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getAllReportIds",
        outputs: [
          {
            internalType: "string[]",
            name: "",
            type: "string[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_reportId",
            type: "string",
          },
        ],
        name: "getReportById",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "district",
                type: "string",
              },
              {
                internalType: "string",
                name: "Area",
                type: "string",
              },
              {
                internalType: "string",
                name: "title",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "photoHash",
                type: "string",
              },
              {
                internalType: "string",
                name: "videoHash",
                type: "string",
              },
            ],
            internalType: "struct AnonymousReportingSystem.Report",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getTotalContractsDeployed",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ]; // Replace with your contract ABI
    
  
    // Get the account from the current provider (Metamask)
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    await contract.methods.revokeAccess(metamaskId).send({ from: account });

    alert("Access revoked successfully!");
  } catch (error) {
    alert("Error revoking access: " + error.message);
  }
}
