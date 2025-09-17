import React, { useState, useEffect } from 'react';

const AZ900Flashcards = () => {
  const flashcards = [
    // Cloud Computing Concepts
  { "term": "Cloud Computing", "definition": "Delivery of computing services over the internet including servers, storage, databases, networking, and software.", "scenario": "A startup uses Azure instead of buying physical servers to run their web application.", "priority": "high" },
  { "term": "Capital Expenditure (CapEx)", "definition": "Upfront spending on physical infrastructure that is deducted over time.", "scenario": "Buying and setting up your own data center with servers, cooling, and networking equipment.", "priority": "high" },
  { "term": "Operational Expenditure (OpEx)", "definition": "Pay-as-you-go spending on services, billed based on actual usage.", "scenario": "Paying monthly for Azure virtual machines based on usage hours.", "priority": "high" },
  { "term": "High Availability", "definition": "Design that minimizes downtime and keeps services available during failures.", "scenario": "An e-commerce site stays online even when one Azure data center goes offline.", "priority": "high" },
  { "term": "Fault Tolerance", "definition": "The ability to continue running with zero interruption even when components fail.", "scenario": "A database continues running even if one server crashes, thanks to redundancy.", "priority": "high" },
  { "term": "Scalability", "definition": "The ability to increase or decrease resources to match demand.", "scenario": "A streaming service adds more servers during peak viewing hours.", "priority": "high" },
  { "term": "Elasticity", "definition": "Automatic scaling of resources up or down based on demand.", "scenario": "Azure reduces VM instances at night when traffic is lower.", "priority": "high" },
  { "term": "Agility", "definition": "Ability to rapidly provision, test, and launch resources to meet changing business needs.", "scenario": "A dev team deploys new features to production within minutes using Azure DevOps.", "priority": "high" },
  { "term": "Disaster Recovery", "definition": "Ability to restore services after a major outage affecting an entire region.", "scenario": "After a natural disaster, a company restores operations from another Azure region.", "priority": "high" },

  // Service Models
  { "term": "Infrastructure as a Service (IaaS)", "definition": "Provides virtualized computing infrastructure such as servers, storage, and networks.", "scenario": "A company rents Azure Virtual Machines instead of buying servers.", "priority": "high" },
  { "term": "Platform as a Service (PaaS)", "definition": "Provides a managed environment for developing and deploying applications.", "scenario": "Developers deploy a web app to Azure App Service without managing servers.", "priority": "high" },
  { "term": "Software as a Service (SaaS)", "definition": "Delivers complete software applications over the internet.", "scenario": "A company uses Microsoft 365 for email and collaboration.", "priority": "high" },

  // Deployment Models
  { "term": "Public Cloud", "definition": "Services offered by a provider to multiple customers over the public internet.", "scenario": "A small business uses Azure for their website and email.", "priority": "high" },
  { "term": "Private Cloud", "definition": "Cloud services dedicated to a single organization.", "scenario": "A bank hosts sensitive data in its private cloud.", "priority": "high" },
  { "term": "Hybrid Cloud", "definition": "Combination of public and private clouds with data and app portability.", "scenario": "A company keeps sensitive data private but uses public cloud for dev/test.", "priority": "high" },

  // Core Azure Services
  { "term": "Azure Virtual Machines", "definition": "On-demand, scalable computing resources with full OS control.", "scenario": "Migrating on-prem Windows servers to Azure VMs.", "priority": "high" },
  { "term": "Azure App Service", "definition": "PaaS for building, deploying, and scaling web apps and APIs.", "scenario": "Deploying a Python app quickly without configuring servers.", "priority": "high" },
  { "term": "Azure Container Instances (ACI)", "definition": "Run containers without managing virtual machines.", "scenario": "Running microservices in isolated containers.", "priority": "high" },
  { "term": "Azure Kubernetes Service (AKS)", "definition": "Managed Kubernetes for orchestrating containerized applications.", "scenario": "Scaling hundreds of containers for an e-commerce app.", "priority": "high" },
  { "term": "Azure Functions", "definition": "Event-driven serverless compute that runs code in response to triggers.", "scenario": "Processing uploaded images whenever a file is added to Azure Storage.", "priority": "high" },
  { "term": "Azure Virtual Desktop", "definition": "Desktop and app virtualization service in the cloud.", "scenario": "Employees securely access their desktops from any device.", "priority": "medium" },

  // Networking
  { "term": "Azure Virtual Network (VNet)", "definition": "Logically isolated private network in Azure.", "scenario": "Connecting Azure VMs securely in a private network.", "priority": "high" },
  { "term": "VPN Gateway", "definition": "Encrypted connection between on-prem networks and Azure VNets.", "scenario": "Securely connecting office network to Azure resources.", "priority": "high" },
  { "term": "Azure ExpressRoute", "definition": "Private, dedicated connection from on-premises to Azure.", "scenario": "Enterprise requires guaranteed bandwidth and low latency.", "priority": "medium" },
  { "term": "Azure Bastion", "definition": "Secure RDP/SSH access to VMs without exposing public IPs.", "scenario": "Admins connect to VMs via Azure portal securely.", "priority": "medium" },
  { "term": "Content Delivery Network (CDN)", "definition": "Globally distributed servers that cache content closer to users.", "scenario": "Streaming videos faster using worldwide caching.", "priority": "medium" },
  { "term": "Azure Load Balancer", "definition": "Distributes incoming traffic across multiple servers.", "scenario": "Web traffic spread across 3 servers for high availability.", "priority": "high" },

  // Storage
  { "term": "Azure Storage Account", "definition": "Provides a unique namespace for all Azure storage data objects.", "scenario": "Storing files, databases, and backups under one account.", "priority": "high" },
  { "term": "Azure Blob Storage", "definition": "Object storage for unstructured data (text, images, binary).", "scenario": "Storing images and documents in the cloud.", "priority": "high" },
  { "term": "Azure Disk Storage", "definition": "High-performance block storage for Azure VMs.", "scenario": "Adding disks to VMs for databases or apps.", "priority": "high" },
  { "term": "Azure Files", "definition": "Managed file shares accessible over SMB/NFS.", "scenario": "Multiple VMs sharing central config files.", "priority": "medium" },
  { "term": "Storage Tiers", "definition": "Pricing tiers: Hot (frequent), Cool (infrequent), Archive (long-term).", "scenario": "Recent files in Hot, old data in Cool, compliance in Archive.", "priority": "medium" },

  // Databases
  { "term": "Azure SQL Database", "definition": "Fully managed relational database with HA, scaling, and backups.", "scenario": "Web app stores data without managing SQL Server.", "priority": "high" },
  { "term": "Azure Cosmos DB", "definition": "Globally distributed NoSQL database with multi-model support.", "scenario": "Social media app requires global low-latency database.", "priority": "medium" },
  { "term": "Azure Database for MySQL", "definition": "Fully managed MySQL in Azure.", "scenario": "Migrating a PHP app’s MySQL DB to Azure.", "priority": "medium" },

  // Identity & Access
  { "term": "Microsoft Entra ID", "definition": "Cloud-based identity and access management (formerly Azure AD).", "scenario": "Employees sign in once to access Azure and Microsoft 365.", "priority": "high" },
  { "term": "Multi-Factor Authentication (MFA)", "definition": "Requires two or more verification factors for login.", "scenario": "Password + phone app approval required.", "priority": "high" },
  { "term": "Single Sign-On (SSO)", "definition": "One set of credentials gives access to multiple apps.", "scenario": "Employee logs in once to access email, CRM, and Azure portal.", "priority": "medium" },
  { "term": "Conditional Access", "definition": "Policies that grant/deny access based on conditions.", "scenario": "Require MFA when logging in outside the office.", "priority": "medium" },
  { "term": "Shared Responsibility Model", "definition": "Division of security responsibilities between Microsoft and the customer.", "scenario": "Microsoft secures datacenters; customers secure apps and data.", "priority": "high" },

  // Security & Compliance
  { "term": "Microsoft Defender for Cloud", "definition": "Cloud-native security service to detect threats and strengthen posture.", "scenario": "Company gets threat alerts and recommendations across workloads.", "priority": "high" },
  { "term": "Microsoft Sentinel", "definition": "Cloud-native SIEM/SOAR for threat detection and response.", "scenario": "Security team monitors and responds to incidents across Azure and on-prem.", "priority": "medium" },
  { "term": "Azure Firewall", "definition": "Managed firewall service for network traffic filtering.", "scenario": "Controlling all outbound traffic from a subnet.", "priority": "medium" },
  { "term": "Azure Key Vault", "definition": "Secure storage for keys, secrets, and certificates.", "scenario": "Storing DB passwords and API keys securely.", "priority": "high" },
  { "term": "Network Security Groups (NSG)", "definition": "Rules that allow or deny traffic to Azure resources.", "scenario": "Blocking all traffic to DB servers except from web servers.", "priority": "high" },
  { "term": "Azure DDoS Protection", "definition": "Protects against distributed denial-of-service attacks.", "scenario": "Shielding a web app from traffic floods.", "priority": "medium" },
  { "term": "Defense in Depth", "definition": "Layered security approach using multiple controls.", "scenario": "Firewalls, encryption, RBAC, and monitoring together.", "priority": "medium" },
  { "term": "Microsoft Trust Center", "definition": "Portal with compliance info, certifications, and reports.", "scenario": "Company checks Azure’s compliance with ISO and GDPR.", "priority": "medium" },

  // Monitoring & Management
  { "term": "Azure Monitor", "definition": "Collects, analyzes, and responds to telemetry from resources.", "scenario": "Alerts when CPU usage spikes.", "priority": "high" },
  { "term": "Azure Advisor", "definition": "Provides best-practice recommendations for cost, security, and performance.", "scenario": "Suggests resizing underutilized VMs.", "priority": "medium" },
  { "term": "Azure Resource Manager (ARM)", "definition": "Framework for deploying and managing resources with templates.", "scenario": "Deploy identical environments via ARM templates.", "priority": "medium" },
  { "term": "Management Groups", "definition": "Organize subscriptions for centralized policy and access control.", "scenario": "Applying company-wide policy across departments.", "priority": "medium" },
  { "term": "Azure Arc", "definition": "Extends Azure management to on-prem, multi-cloud, and edge.", "scenario": "Managing Azure and AWS resources from one portal.", "priority": "medium" },

  // Pricing & Support
  { "term": "Azure Pricing Calculator", "definition": "Estimates service costs before deployment.", "scenario": "Forecasting VM and storage costs for a project.", "priority": "high" },
  { "term": "Azure Cost Management + Billing", "definition": "Tracks actual usage and optimizes costs.", "scenario": "Analyzing monthly spend by resource group.", "priority": "high" },
  { "term": "Total Cost of Ownership (TCO) Calculator", "definition": "Compares cost of Azure vs. on-premises workloads (being phased out).", "scenario": "Estimating 3-year savings by moving workloads to Azure.", "priority": "medium" },
  { "term": "Azure Service Level Agreements (SLA)", "definition": "Microsoft’s uptime and availability guarantees per service.", "scenario": "Service with 99.95% SLA allows ~22 minutes downtime per month.", "priority": "high" },
  { "term": "Azure Support Plans", "definition": "Support tiers from Basic to Premier.", "scenario": "Production system requires 24/7 ProDirect support.", "priority": "medium" },

  // Governance & Compliance
  { "term": "Azure Policy", "definition": "Enforces organizational standards and evaluates compliance.", "scenario": "Blocking creation of VMs in non-compliant regions.", "priority": "medium" },
  { "term": "Azure Blueprints", "definition": "Package of templates, policies, and role assignments for standardization.", "scenario": "Deploying a secure baseline for all new projects.", "priority": "medium" },
  { "term": "Resource Locks", "definition": "Prevents accidental deletion or modification of resources.", "scenario": "Locking a production SQL database against deletion.", "priority": "medium" },
  { "term": "Resource Tags", "definition": "Name/value pairs for organizing and tracking resources.", "scenario": "Tagging by department to allocate costs.", "priority": "medium" },
  { "term": "Cloud Adoption Framework (CAF)", "definition": "Guidance and best practices for planning and governing Azure adoption.", "scenario": "An enterprise uses CAF to structure migration strategy.", "priority": "medium" },

  // Regions & Availability
  { "term": "Azure Regions", "definition": "Geographic locations containing one or more datacenters.", "scenario": "Choosing East US for low-latency access to East Coast customers.", "priority": "high" },
  { "term": "Availability Zones", "definition": "Physically separate datacenters within a region for redundancy.", "scenario": "Deploying across zones so service continues if one fails.", "priority": "high" },
  { "term": "Azure Marketplace", "definition": "Online store with certified apps and solutions for Azure.", "scenario": "Deploying a WordPress VM template directly from Marketplace.", "priority": "medium" }
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState([...flashcards]);
  const [currentFilter, setCurrentFilter] = useState('all');

  const getPriorityIcon = (priority) => {
    return priority === "high" ? "🔴 High Priority" : "🟡 Medium Priority";
  };

  const filterCards = (priority) => {
    setCurrentFilter(priority);
    if (priority === 'all') {
      setCards([...flashcards]);
    } else {
      setCards(flashcards.filter(card => card.priority === priority));
    }
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const nextCard = () => {
    if (cards.length === 0) return;
    setCurrentIndex((currentIndex + 1) % cards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    if (cards.length === 0) return;
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
    setIsFlipped(false);
  };

  const flipCard = () => {
    if (cards.length === 0) return;
    setIsFlipped(!isFlipped);
  };

  const shuffle = () => {
    if (cards.length === 0) return;
    setCards([...cards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const reset = () => {
    filterCards(currentFilter);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === ' ') {
        e.preventDefault();
        flipCard();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, cards.length]);

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">AZ-900 Flashcards (2025)</h1>
            <p className="text-gray-600">Azure Fundamentals definitions + exam scenarios</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 min-h-80">
            <p className="text-gray-500 text-center">No cards match the current filter</p>
          </div>
        </div>
      </div>
    );
  }

  const card = cards[currentIndex];
  const progressPercentage = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">AZ-900 Flashcards (2025)</h1>
          <p className="text-gray-600">Azure Fundamentals definitions + exam scenarios</p>
          
          {/* Progress section */}
          <div className="text-sm text-gray-500 mt-2">
            <div>Card {currentIndex + 1} of {cards.length}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div 
                className={`h-2 rounded-full ${
                  currentFilter === 'high' ? 'bg-red-500' : 
                  currentFilter === 'medium' ? 'bg-yellow-400' : 
                  'bg-indigo-600'
                }`}
                style={{width: `${progressPercentage}%`}}
              />
            </div>
          </div>
        </div>

        {/* Priority Filter */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-2 shadow-md">
            <button 
              onClick={() => filterCards('all')}
              className={`px-4 py-2 rounded-md font-medium ${
                currentFilter === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Cards
            </button>
            <button 
              onClick={() => filterCards('high')}
              className={`px-4 py-2 rounded-md ${
                currentFilter === 'high' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🔴 High Priority
            </button>
            <button 
              onClick={() => filterCards('medium')}
              className={`px-4 py-2 rounded-md ${
                currentFilter === 'medium' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🟡 Medium Priority
            </button>
          </div>
        </div>

        <div className="relative mb-8">
          <div 
            onClick={flipCard}
            className="bg-white rounded-xl shadow-lg p-8 min-h-80 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="text-center">
              {!isFlipped ? (
                <>
                  <div className="text-sm uppercase text-indigo-600 font-semibold mb-2">Definition</div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{card.definition}</p>
                  {card.scenario && (
                    <p className="text-sm text-gray-600 italic mb-4">💡 Scenario: {card.scenario}</p>
                  )}
                  <div className="text-gray-500 italic mb-2">Click to see the term</div>
                  <div className="text-xs text-gray-600">{getPriorityIcon(card.priority)}</div>
                </>
              ) : (
                <>
                  <div className="text-sm uppercase text-green-600 font-semibold mb-2">Term</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">{card.term}</h2>
                  {card.scenario && (
                    <p className="text-sm text-gray-600 italic mb-4">💡 Scenario: {card.scenario}</p>
                  )}
                  <div className="text-gray-500 italic mb-2">Click to see definition again</div>
                  <div className="text-xs text-gray-600">{getPriorityIcon(card.priority)}</div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-6">
          <button 
            onClick={prevCard}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-lg transition-colors duration-200"
          >
            ←
          </button>
          <button 
            onClick={flipCard}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            {isFlipped ? 'Show Definition' : 'Show Term'}
          </button>
          <button 
            onClick={nextCard}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-lg transition-colors duration-200"
          >
            →
          </button>
        </div>

        <div className="flex justify-center space-x-4">
          <button 
            onClick={shuffle}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            🔀 Shuffle Cards
          </button>
          <button 
            onClick={reset}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            ↻ Reset Order
          </button>
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>💡 <strong>Study Tip:</strong> Start with High Priority cards, then review Medium Priority for comprehensive coverage!</p>
          <p className="mt-2">🎯 Focus on real-world scenarios — they often appear on the exam!</p>
        </div>
      </div>
    </div>
  );
};

export default AZ900Flashcards;
