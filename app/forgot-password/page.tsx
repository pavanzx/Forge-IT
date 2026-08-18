"use client";
import { useState } from "react";
import Link from "next/link";
export default function Page(){const [sent,setSent]=useState(false);return <div className="page-center"><div className="auth-form panel" style={{width:'min(520px,92vw)'}}><span className="eyebrow">Account recovery</span><h2>Reset access.</h2><p>Enter your email and we’ll prepare a reset flow for this demo.</p><input placeholder="you@example.com"/><button className="primary-button" onClick={()=>setSent(true)}>{sent?'Reset link prepared ✓':'Send reset link'}</button><Link href="/auth" className="secondary-button">Back to authentication</Link></div></div>}
