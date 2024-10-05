import React from 'react';

function JobExperience({ companyImage, companyName, jobTitle, date, skills, description }) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-250">{jobTitle}</h2>
            <h3 className="text-lg text-gray-400">{companyName}</h3>
            <p className="text-sm text-gray-400">{date}</p>
            {/* Render description based on its type */}
            {Array.isArray(description) ? (
                <ul className="mt-2 text-gray-300 list-disc list-inside">
                    {description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            ) : (
                <p className="mt-2 text-gray-300">{description}</p>
            )}
            <div className="mt-2">

                <div className="flex flex-wrap gap-2 mt-1">
                    <h4 className="font-semibold text-white"></h4> {/* Flex container for skills */}
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="text-gray-300 px-2 py-1 rounded-md text-sm"
                            style={{ backgroundColor: '#2b3431' }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default JobExperience;