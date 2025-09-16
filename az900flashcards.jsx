import React, { useState, useEffect } from 'react';

const AZ900Flashcards = () => {
  const flashcards = [
    // Cloud Computing Concepts
    { term: "Cloud Computing", definition: "Delivery of computing services over the internet including servers, storage, databases, networking, and software.", scenario: "A startup uses Azure instead of buying physical servers to run their web application.", priority: "high" },
    { term: "Capital Expenditure (CapEx)", definition: "Upfront spending on physical infrastructure that is deducted over time.", scenario: "Buying and setting up your own data center with servers, cooling, and networking equipment.", priority: "high" },
    { term: "Operational Expenditure (OpEx)", definition: "Spending on services or products over time, paying as you use them.", scenario: "Paying monthly for Azure virtual machines based on actual usage.", priority: "high" },
    { term: "High Availability", definition: "Systems designed to operate continuously without failure for long periods.", scenario: "An e-commerce site stays online even when one Azure data center goes offline.", priority: "high" },
    { term: "Scalability", definition: "The ability to increase or decrease resources to match changing demand.", scenario: "A streaming service automatically adds more servers during peak viewing hours.", priority: "high" },
    { term: "Elasticity", definition: "The ability to automatically scale resources up or down based on current demand.", scenario: "Azure automatically reduces VM instances when website traffic decreases at night.", priority: "high" },
    { term: "Agility", definition: "The ability to rapidly develop, test, and launch applications in response to market demands.", scenario: "A development team deploys new features to production within minutes using Azure DevOps.", priority: "high" },
    { term: "Fault Tolerance", definition: "The ability to remain operational even when components fail.", scenario: "A database continues running even if one of its servers crashes, thanks to redundancy.", priority: "high" },
    { term: "Disaster Recovery", definition: "The ability to recover from major incidents that affect an entire region.", scenario: "After a natural disaster, a company restores operations using backups in another Azure region.", priority: "high" },

    // Service Models
    { term: "Infrastructure as a Service (IaaS)", definition: "Provides virtualized computing infrastructure including servers, storage, and networks.", scenario: "A company rents Azure Virtual Machines instead of buying physical servers.", priority: "high" },
    { term: "Platform as a Service (PaaS)", definition: "Provides a development platform including operating system, development tools, and database management.", scenario: "Developers deploy a web app to Azure App Service without managing the underlying servers.", priority: "high" },
    { term: "Software as a Service (SaaS)", definition: "Provides complete software applications over the internet.", scenario: "A company uses Microsoft 365 for email and office applications instead of installing software locally.", priority: "high" },

    // Deployment Models
    { term: "Public Cloud", definition: "Cloud services offered over the public internet and available to anyone who wants to purchase them.", scenario: "A small business uses Azure's public cloud services for their website and email.", priority: "high" },
    { term: "Private Cloud", definition: "Cloud services used exclusively by one business or organization.", scenario: "A bank creates its own cloud infrastructure for sensitive financial data.", priority: "high" },
    { term: "Hybrid Cloud", definition: "Combines public and private clouds, allowing data and applications to move between them.", scenario: "A company keeps sensitive data in a private cloud but uses public cloud for development and testing.", priority: "high" },

    // Core Azure Services
    { term: "Azure Virtual Machines", definition: "On-demand, scalable computing resources that provide complete control over the operating system.", scenario: "A company migrates their existing Windows server applications to Azure VMs.", priority: "high" },
    { term: "Azure App Service", definition: "Platform for building, deploying, and scaling web apps and APIs without managing infrastructure.", scenario: "A developer quickly deploys a Python web application without configuring servers.", priority: "high" },
    { term: "Azure Container Instances (ACI)", definition: "The fastest way to run containers in Azure without managing virtual machines.", scenario: "A microservices application runs each service in separate containers for better isolation.", priority: "high" },
    { term: "Azure Kubernetes Service (AKS)", definition: "Managed Kubernetes service for deploying and managing containerized applications at scale.", scenario: "A large e-commerce platform orchestrates hundreds of containers across multiple servers.", priority: "high" },
    { term: "Azure Functions", definition: "Serverless compute service that runs code in response to events without managing infrastructure.", scenario: "Processing uploaded images automatically whenever a file is added to Azure Storage.", priority: "high" },
    { term: "Azure Virtual Desktop", definition: "Desktop and app virtualization service that runs in the cloud.", scenario: "Remote employees access their work desktop and applications from any device.", priority: "medium" },

    // Networking
    { term: "Azure Virtual Network (VNet)", definition: "Logically isolated network in Azure where you can securely connect Azure resources.", scenario: "Creating a private network for your Azure VMs to communicate securely with each other.", priority: "high" },
    { term: "VPN Gateway", definition: "Sends encrypted traffic between Azure virtual networks and on-premises locations.", scenario: "Connecting your office network securely to Azure resources over the internet.", priority: "high" },
    { term: "Azure ExpressRoute", definition: "Private connection between on-premises infrastructure and Azure that doesn't go over the internet.", scenario: "A large enterprise needs guaranteed bandwidth and lower latency to Azure.", priority: "medium" },
    { term: "Content Delivery Network (CDN)", definition: "Globally distributed network that caches content closer to users for faster delivery.", scenario: "A video streaming service delivers content faster by caching videos in multiple locations worldwide.", priority: "medium" },

    // Storage
    { term: "Azure Storage Account", definition: "Provides a unique namespace in Azure for your data objects.", scenario: "Creating a storage account to hold all your company's files, databases, and backups.", priority: "high" },
    { term: "Azure Blob Storage", definition: "Object storage service for storing massive amounts of unstructured data like text or binary data.", scenario: "Storing website images, documents, and backup files in the cloud.", priority: "high" },
    { term: "Azure Disk Storage", definition: "High-performance, durable block storage for Azure Virtual Machines.", scenario: "Adding additional storage drives to your Azure VMs for databases or applications.", priority: "high" },
    { term: "Azure Files", definition: "Fully managed file shares in the cloud accessible via SMB protocol.", scenario: "Multiple VMs sharing the same configuration files stored centrally.", priority: "medium" },
    { term: "Storage Tiers (Hot, Cool, Archive)", definition: "Different pricing tiers based on how frequently you access your data.", scenario: "Storing recent documents in Hot tier, older files in Cool tier, and compliance archives in Archive tier.", priority: "medium" },

    // Databases
    { term: "Azure SQL Database", definition: "Fully managed relational database service based on SQL Server.", scenario: "A web application stores user data in a cloud database without managing SQL Server.", priority: "high" },
    { term: "Azure Cosmos DB", definition: "Globally distributed, multi-model database service for any scale.", scenario: "A social media app needs a database that works fast anywhere in the world.", priority: "medium" },
    { term: "Azure Database for MySQL", definition: "Fully managed MySQL database service in the cloud.", scenario: "Migrating an existing PHP application's MySQL database to Azure.", priority: "medium" },

    // Identity and Access
    { term: "Microsoft Entra ID (Azure AD)", definition: "Cloud-based identity and access management service.", scenario: "Employees use their company login to access both Azure resources and Office 365.", priority: "high" },
    { term: "Multi-Factor Authentication (MFA)", definition: "Security method requiring two or more verification factors to gain access.", scenario: "Users must enter a password and confirm via phone app to access sensitive data.", priority: "high" },
    { term: "Single Sign-On (SSO)", definition: "Ability to use one set of credentials to access multiple applications.", scenario: "An employee logs in once and can access email, CRM, and Azure portal without additional logins.", priority: "medium" },
    { term: "Conditional Access", definition: "Policies that enforce access controls based on specific conditions.", scenario: "Requiring MFA only when users access company data from outside the office.", priority: "medium" },

    // Security and Compliance
    { term: "Azure Security Center", definition: "Unified security management system that strengthens security posture across hybrid cloud workloads.", scenario: "Getting security recommendations and threat detection across all Azure resources.", priority: "high" },
    { term: "Azure Key Vault", definition: "Cloud service for securely storing and accessing secrets, keys, and certificates.", scenario: "Storing database passwords and API keys securely instead of hardcoding them in applications.", priority: "high" },
    { term: "Network Security Groups (NSG)", definition: "Contains security rules that allow or deny network traffic to Azure resources.", scenario: "Blocking all internet traffic to database servers except from web servers.", priority: "high" },
    { term: "Azure DDoS Protection", definition: "Service that protects Azure resources from Distributed Denial of Service attacks.", scenario: "Protecting a web application from being overwhelmed by malicious traffic.", priority: "medium" },
    { term: "Defense in Depth", definition: "Layered security approach using multiple security measures.", scenario: "Using firewalls, encryption, access controls, and monitoring together for comprehensive security.", priority: "medium" },

    // Monitoring and Management
    { term: "Azure Monitor", definition: "Comprehensive monitoring solution for collecting, analyzing, and responding to telemetry.", scenario: "Getting alerts when CPU usage is high and viewing performance metrics for troubleshooting.", priority: "high" },
    { term: "Azure Advisor", definition: "Personalized cloud consultant that provides best practice recommendations.", scenario: "Getting suggestions to reduce costs by resizing underutilized virtual machines.", priority: "medium" },
    { term: "Azure Resource Manager (ARM)", definition: "Deployment and management service that enables you to manage Azure resources.", scenario: "Using ARM templates to deploy identical environments for development, testing, and production.", priority: "medium" },
    { term: "Management Groups", definition: "Containers that help you manage access, policy, and compliance across multiple subscriptions.", scenario: "A large organization organizing hundreds of subscriptions by department and applying company-wide policies.", priority: "medium" },

    // Pricing and Support
    { term: "Azure Pricing Calculator", definition: "Tool to estimate costs for Azure services before deployment.", scenario: "Planning a cloud migration by calculating monthly costs for VMs, storage, and networking.", priority: "high" },
    { term: "Total Cost of Ownership (TCO) Calculator", definition: "Tool that compares the cost of running workloads in Azure versus on-premises.", scenario: "Proving to management that moving to Azure will save money over 3 years compared to maintaining data centers.", priority: "high" },
    { term: "Azure Service Level Agreements (SLA)", definition: "Formal commitments about service availability and performance.", scenario: "Choosing services with 99.9% uptime SLA for critical business applications.", priority: "high" },
    { term: "Azure Support Plans", definition: "Different levels of technical support from Basic to Premier.", scenario: "A production environment needing 24/7 phone support chooses Professional Direct support plan.", priority: "medium" },

    // Governance and Compliance
    { term: "Azure Policy", definition: "Service that helps enforce organizational standards and assess compliance at scale.", scenario: "Preventing users from creating expensive GPU virtual machines in development subscriptions.", priority: "medium" },
    { term: "Azure Blueprints", definition: "Declarative way to orchestrate deployment of resource templates, policies, and role assignments.", scenario: "Ensuring all new projects follow company security standards by deploying a standard blueprint.", priority: "medium" },
    { term: "Resource Locks", definition: "Prevents accidental deletion or modification of critical Azure resources.", scenario: "Locking a production database to prevent anyone from accidentally deleting it.", priority: "medium" },
    { term: "Resource Tags", definition: "Name/value pairs that help organize and track Azure resources.", scenario: "Tagging resources by department and project to track costs and manage billing.", priority: "medium" },

    // Additional Core Concepts
    { term: "Availability Zones", definition: "Physically separate datacenters within an Azure region for high availability.", scenario: "Deploying VMs across multiple zones so your app stays running if one datacenter fails.", priority: "high" },
    { term: "Azure Regions", definition: "Geographical areas containing one or more datacenters for deploying Azure resources.", scenario: "Choosing East US region for better performance for customers on the East Coast.", priority: "high" },
    { term: "Azure Load Balancer", definition: "Distributes incoming network traffic across multiple servers for high availability.", scenario: "Spreading web traffic across 3 web servers so no single server gets overloaded.", priority: "high" },
    { term: "Azure Marketplace", definition: "Online store for finding, trying, and deploying software solutions certified to run on Azure.", scenario: "Quickly deploying a pre-configured WordPress site from the Azure Marketplace.", priority: "medium" }
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
