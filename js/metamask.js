// Add an event listener to the button
const signInButton = document.getElementById('signInButton');
signInButton.addEventListener('click', signInWithMetaMask);

// Function to handle sign-in with MetaMask
function signInWithMetaMask() {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    const web3 = new Web3(window.ethereum);

    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(accounts => {
        const userAccount = accounts[0];
        console.log('Signed in with MetaMask! Account:', userAccount);

        // Your logic for handling the sign-in and navigating to the dashboard
        // ...

      })
      .catch(error => {
        console.error('Error signing in with MetaMask:', error);
      });
  } else {
    console.log('MetaMask is not installed!');
    // Handle the case where MetaMask is not installed
    // ...
  }
}
