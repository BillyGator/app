import { useState, useEffect } from 'react';

interface EmailProtectionProps {
    user: string;
    domain: string;
    className?: string;
    label?: string;
}

const EmailProtection = ({ user, domain, className = '', label }: EmailProtectionProps) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Construct the email only after the component mounts
        // This prevents the email from being in the initial HTML source
        setEmail(`${user}@${domain}`);
    }, [user, domain]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = `mailto:${user}@${domain}`;
    };

    if (!email) {
        // Render a placeholder or nothing while mounting (very brief)
        return <span className={className}>Loading...</span>;
    }

    return (
        <a
            href="#"
            onClick={handleClick}
            className={className}
            aria-label="Email Us"
            onContextMenu={() => {
                // Allow copy-paste on right click if needed, but prevent default context menu if desired
                // For now, let's just let it be a link
            }}
        >
            {label || email}
        </a>
    );
};

export default EmailProtection;
