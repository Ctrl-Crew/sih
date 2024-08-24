"use client";

import React from "react";
import { AuditSelection } from "./components/auditconfig";

export default function PastAuditPage() {
  return (
    <div>
      <h1>Audits:- </h1>
      <AuditSelection />
    </div>
  );
}