import styled from "styled-components";

const StyledProjects=styled.main`
    margin: 3vh;
    width: 100%;
    height: 100vh;
    color: white;
`;


export default function Projects(){
    return(
        <StyledProjects id="main-content">
            <h1 id="main-title">Projects:</h1>
            <br />
            <hr />
            <div>
                <h2>SepiaAI | Java, Sepia API, Docker | January 2025 – Present: </h2> <br />
                <li>Developed an autonomous AI agent for a stealth-based mission in SEPIA, navigating enemy territory to destroy enemy bases and extract resources.</li>
                <li>Implemented Dijkstra’s algorithm to efficiently compute the shortest path for resource gathering and optimal movement.</li>
                <li>Designed a Hill Climbing AI to identify the highest and lowest terrain points, enhancing strategic positioning and route optimization.</li>
                <li>Created an adaptive decision-making agent that dynamically adjusts its strategy based on enemy patrols and environmental changes.</li>
                <li>Integrated advanced pathfinding and AI heuristics to balance stealth, efficiency, and survivability in a hostile environment.</li>
                <li>Mastered SEPIA framework through iterative development and testing, ensuring robust AI behavior in real-time scenarios.</li>
                <br />
                <br />
                <hr />

                <h2>Tetris AI Agent | Java, Neural Networks, Reinforcement Learning, Q-Learning | January 2025 – May 2025</h2> <br />
                <li>Engineered a Q-learning agent to play Tetris using a feedforward neural network trained via Bellman-based reward updates.</li>
                <li>Designed a custom reward function and state-action feature vector to encourage efficient line clears and advanced moves like T-spins.</li>
                <li>Built a curiosity-driven exploration policy to prevent stagnation and improve long-term strategy learning.</li>
                <li>Trained agent over thousands of games, achieving competitive performance by optimizing trajectory utility across cycles.</li>
                <br />
                <br />
                <hr />


            </div>
        </StyledProjects>
    );
}



