import React, { useState, useEffect, createContext } from 'react'

export const MainContext = createContext();

const ethereum = window.ethereum;

export const MainProvider = ({ children }) => {
   const [signUp, setSignUp] = useState(false)
   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

   const handleChange = (e, name) => {
      setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
   };

   const myEmail = "aigbeshedrack0@gmail.com";
   const myName = "shedrack";
   const myPassword = "password";

   const handleSignUp = () => {
      if (formData.name === myName && formData.email === myEmail && formData.password == myPassword) {
         setSignUp(true);
         // setInterval(() => {
         //    window.location.replace("http://localhost:3001/main");
         // }, 1000);
      } else return;
   }

   const [currentAccount, setCurrentAccount] = useState("");

   const checkIfWalletisConnected = async () => {
      try {
         if (typeof ethereum === "undefined") return console.log("Please install Metamask");
         const accounts = await ethereum.request({ method: "eth_accounts" });

         if (accounts.length) {
            console.log(accounts[0])
            setCurrentAccount(accounts[0]);
         } else {
            console.log("No accounts found");
         }
      } catch (error) {
         console.error(error.message);
      }
   }

   const connectWallet = async () => {
      if (typeof ethereum === "undefined") {
         console.log("Please Install MetaMask");
      } else {
         try {
            const connectAccount = await ethereum.request({ method: "eth_requestAccounts" });
            window.location.reload()
         } catch (error) {
            console.error(error.message);
            throw new Error("No ethereum Object Found :(")
         }
      }
   }

   useEffect(() => {
      checkIfWalletisConnected();
   }, [])

   return (
      <MainContext.Provider
         value={{
            connectWallet,
            currentAccount,
            formData,
            handleChange,
            handleSignUp,
            signUp
         }}
      >
         {children}
      </MainContext.Provider>
   )
}