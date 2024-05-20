// components/GoogleMapEmbed.js
import React from 'react';

const GoogleMapEmbed = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <iframe
                width="100%"
                height="154%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d750.575462998649!2d77.10019945428462!3d28.424265854723647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715796830792!5m2!1sen!2sin"
                aria-hidden="false"
            ></iframe>
        </div>
    );
}

export default GoogleMapEmbed;
