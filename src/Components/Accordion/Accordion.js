import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
    return (
        <div>
            <Accordion style={{backgroundColor: '#d5cede'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{fontSize: '20px'}}><b>Track 1: Smart Electronic Systems (SES)</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            •	Wearable electronics<br />
                            •	Smart sensors<br />
                            •	Internet of Smart Things for 5G and its applications<br />
                            •	Models for a Smart Environment<br />
                            •	Smart Electronic Devices and Materials Processing<br />
                            •	Nano Electronics and Microelectronics<br />
                            •	Low Power Electronics<br />
                            •	MEMS and Sensors Design<br />
                            •	Organic electronic materials and devices<br />
                            •	Electronic System Level Design<br />
                            •	Smart Computing and Personal Area Networks<br />
                            •	Smart Portable Electronic Devices<br />
                            •	Wearables, Body Sensor Networks<br />
                            •	Reconfigurable Electronics for a smart Environment<br />
                            •	Medical Electronics<br />
                            •	Device characterization and modelling<br />
                            •	Modern electronics materials<br />
                            •	Quantum electronics<br />
                            •	Spintronics<br />
                            •	Flexible and stretchable electronics<br />
                            •	Electronic materials science and technology<br />

                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{backgroundColor: '#d5cede'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{fontSize: '20px'}}><b>Track 2: Next Generation Wireless Communication Techniques</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            •	Broadband, and Low Latency Solutions for 5G/6G<br />
                            •	Massive MIMO and Cell-Free Massive MIMO<br />
                            •	Coding Theory<br />
                            •	Cognitive and Software-Defined Radio<br />
                            •	Cooperative Communication<br />
                            •	Filter Bank Multicarrier (FBMC)<br />
                            •	Full Duplex Systems<br />
                            •	Generalized Frequency Division Multiplexing (GFDM)<br />
                            •	Holographic Beamforming<br />
                            •	Hybrid Digital and Analog Beamforming<br />
                            •	Millimeter Wave Communication<br />
                            •	Modelling, Estimation and Equalization of wireless channels<br />
                            •	Network Densification<br />
                            •	Non-Orthogonal Multiple Access (NOMA)<br />
                            •	Orthogonal Time Frequency Space Modulation (OTFS)<br />
                            •	Reconfigurable Intelligent Surfaces (RIS)<br />
                            •	Index Modulation (IM) Techniques<br />
                            •	THz and sub-THz communications<br />
                            •	V2X, M2M and D2D communications<br />
                            •	Wireless Energy Harvesting<br />
                            •	Green Wireless Technology<br />
                            •	Quantum communication<br />
                            •	UAV-Assisted Communications<br />
                            •	Dynamic Spectrum Sharing<br />
                            •	Multiple Access schemes suitable to 6G<br />
                            •	Interference Management at 6G<br />
                            •	Spectrum regularity for 6G bands<br />
                            •	Integrated communication and sensing<br />
                            •	AI/ML/DL driven wireless communication<br />
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{backgroundColor: '#d5cede'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{fontSize: '20px'}}><b>Track 3: Advanced Wireless Networks</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            •	Blockchain and Distributed Ledger<br />
                            •	Internet Measurement and Modeling<br />
                            •	Machine Learning and AI in Networking<br />
                            •	Software-Defined Networking (SDN) and Network Virtualization<br />
                            •	Vehicle-to-everything (V2X) and Autonomous cars<br />
                            •	Vehicular Networks & Intelligent<br />
                            •	Transportation<br />
                            •	VR/AR Streaming<br />
                            •	Heterogeneous Networks<br />
                            •	Adhoc and Sensor Networks<br />
                            •	Heterogeneous Wireless Networks<br />
                            •	High Speed Networks<br />
                            •	Internet and Web Applications<br />
                            •	Internet of Things (IoT)<br />
                            •	Mobile Networks & Wireless LAN<br />
                            •	Multimedia Networking<br />
                            •	Network Architectures<br />
                            •	Network Based Applications<br />
                            •	Network Operations & Management<br />
                            •	Network Protocols & Wireless Networks<br />
                            •	Networked Systems Applications and Services<br />
                            •	Next Generation Internet<br />
                            •	Next Generation Web Architectures<br />
                            •	Peer to Peer and Overlay Networks<br />
                            •	Recent Trends & Developments in Computer Networks<br />
                            •	Routing, Switching and Addressing Techniques<br />
                            •	SDN/NFV and Network Programmability<br />
                            •	Self-Organizing Networks and Networked Systems<br />
                            •	Ubiquitous Networks<br />
                            •	Wireless Communications<br />
                            •	Wireless Multimedia systems<br />
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{backgroundColor: '#d5cede'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{fontSize: '20px'}}><b>Track 4: Smart Antenna and RF Technologies for next generation Communication (SARF)</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            •	DOA Estimation Algorithms<br />
                            •	Beamforming techniques<br />
                            •	Channel modeling<br />
                            •	Space Time Processing<br />
                            •	Optimum Array Processing<br />
                            •	Adaptive Array<br />
                            •	Adaptive Algorithms<br />
                            •	Mutual Coupling on Adaptive Antennas<br />
                            •	Integration and Simulation of Smart Antennas<br />
                            •	RF, Analog and Mixed-Signal Circuits<br />
                            •	Massive MIMO<br />
                            •	High data rate wireless communication systems<br />
                            •	RF front-end circuits<br />
                            •	CMOS technology for the RFIC<br />
                            •	Low Power Antenna<br />
                            •	Advanced coding and modulation schemes<br />
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{backgroundColor: '#d5cede'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{fontSize: '20px'}}><b>Track 5: Signal and Image Processing (SIP)</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            •	Signal Processing for Communication<br />
                            •	Signal Processing for Big Data<br />
                            •	Time-Frequency Signal Analysis<br />
                            •	Statistical and Optical Signal Processing<br />
                            •	Speech & Audio Processing<br />
                            •	Biomedical Signal Processing<br />
                            •	Large Dimensional Signal Processing<br />
                            •	Optimization Techniques<br />
                            •	Image & Video Signal Processing<br />
                            •	Medical Imaging<br />
                            •	Image Forensic<br />
                            •	Image Data Hiding and Cryptography<br />
                            •	Pattern Analysis & Classification<br />
                            •	Image-based Modeling and Algorithms<br />
                            •	Mathematical Morphology<br />
                            •	Image Geometry and Multi-view Geometry<br />
                            •	3D Imaging<br />
                            •	Motion and Tracking Algorithms and Applications<br />
                            •	Watermarking Methods and Protection<br />
                            •	Image Data Structures and Databases<br />
                            •	Image Compression, Coding, and Encryption<br />
                            •	Video Analysis<br />
                            •	Multi-resolution Imaging Techniques<br />
                            •	Multimedia Systems and Applications<br />
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{backgroundColor: '#d5cede'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{fontSize: '20px'}}><b>Track 6: Advanced Computing and Information Systems Security (ACISS)</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            •	Security of Things<br />
                            •	Location Privacy in IoT<br />
                            •	Cyber-Physical Systems for Sustainable Computing<br />
                            •	Advanced Green Pervasive Computing<br />
                            •	Algorithms for Smart Computing<br />
                            •	Edge and Fog level Computing for data security<br />
                            •	Smart Security Models and Applications<br />
                            •	Information, Internet Security and Privacy Localization<br />
                            •	Cyber-threat intelligence<br />
                            •	Network intrusion detection<br />
                            •	Post-quantum security<br />
                            •	Privacy and data protection<br />
                            •	Industrial IoT security<br />
                            •	Intelligent Computing Technology for 5G and beyond Applications<br />
                            •	Privacy and Anonymity-Enhancing Computing Technologies<br />
                            •	Security, Privacy, Intrusion Detection for the Internet of Things<br />
                            •	Security and Privacy-Aware Data Management<br />
                            •	Distributed Secured Quantum Computing<br />
                            •	IoT Security and Trust<br />
                            •	Cloud Cryptography and Security<br />
                            •	Mobile Cloud Computing<br />
                            •	Neuromorphic Computing<br />

                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{backgroundColor: '#d5cede'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{fontSize: '20px'}}><b>Track 7: Women in Engineering (WIE)</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        All displine in information and communication engineering.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}