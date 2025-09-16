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
    { term: "Agility", definition: "The ability to rapidly develop, test, and launch applications in response to market demands.", scenario: "A development team deploys new
