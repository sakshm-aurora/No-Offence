# SVPCET-Hackathon-Team1-1
Project submitted under SVPCET Virtual Hackathon

Team Members:
1. Saksham Aurora
2. Shivani S

# Problem Statement
Using technology to bully is a problem that is on the rise which can lead 
to the decreased mental health of people. To tackle the problem of 
cyber-bullying and hate speech, the toxicity of the message being 
transported can be determined and used to decide whether a message is 
offensive or not. In case it is offensive, the user can ask his/her friends 
for a review to evaluate if it safe or not which can be done in the form 
of a voting system using decentralized application and block-chain.

# Solution
The proposed solution detects toxicity percentage of a comment and 
if it is more than 75% then it flags the same as toxic and sends the same
for a review to evaluate if it is safe or not using a blockchain based decentralized 
ethereum network for voting.

# Project Description
The project is divided into two phases :
Phase 1 - Toxicity Checking
Phase 2 - Voting Dapp

## Phase1
1. We take a comment as user input from a simple html form.
2. The comment is then checked for Toxicity using ML based NLP algorothims.
3. We do this by using Perspective API on Google Cloud.
4. The response we get gives us the probability of the comment being toxic.
5. The same is displayed on our frontend as well in percentage.
6. If the toxicity percentage is found to be more than 75% then it is flagged toxic and 
    the user is redirected to a voting dapp i.e the phase 2 of our project.
7. If the toxicity percentage is less than 75% the same is displayed on the frontend.

## Phase2
1. When redirected to the voting dapp, the user is asked to login on the
    ethereum network using metamask.
2. Once logged in, user can vote for the comment to be safe or not safe.
3. The total votes for the comment being safe or not safe are displayed on the frontend in real time.

# Problems Faced
1. Writing voting contract in solidity.
2. Configuring and running Metamask with web3 server.
3. Truffle Framework configuration & working.
4. Setting up Perspective API on google cloud.
5. Configuring server for the API using Nodejs & Express.
6. Integrating Phase 1 & Phase 2 of the project together.

# Tech-Stack Used
For checking the toxicity of a comment we used the following tech stack:
1. Nodejs
2. Express
3. HTML , CSS
4. Google Cloud APIs'
5. Perspective API

For developing the blockchain based voting decentralized app the following tech stack was used:
1. Solidity 
2. Nodejs
3. Truffle Framework
4. HTML , CSS
5. Ganache
6. Metamask

# Video/PPT Link
 Presentation : https://docs.google.com/presentation/d/1k_e0O5WA9MIwL5yeEeTSzfLfOllF6J7nyXmEEJ26RuM/edit?usp=sharing  <br>
 Demo Video (used in ppt) : https://drive.google.com/file/d/11tjqFxXq6LaSS1bNL6VU45s31RqjwsQz/view?usp=sharing

# To run the project , run following commands:
1. Open cmd in the toxic-server folder and run the following command: <br>
        | npm install<br>
        | npm start<br>
2. Now open another cmd in dapp folder and run the following command:<br>
        | npm install<br>
        | npm install -g truffle@5.1.18<br>
        | truffle compile<br>
        | truffle migrate<br>
        | truffle test (Optional)<br>
        | npm run dev<br>
 3. Now in a browser , headover to http://localhost:3000
 4. Before running make sure Metamask is configured on your browser as an extension
    & Ganache is running in the background.
 5. To run in a local environment , you must import ethereum accounts from Ganache to Metamask 
    in order to vote.
 6. Done!

# References
1. https://github.com/sakshm-aurora/USA-Election-Dapp-POC
2. https://github.com/conversationai/perspectiveapi
