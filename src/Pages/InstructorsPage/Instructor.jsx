import React from 'react';
import InsCard from './InsCard';

const Instructor = ({ instructors }) => {
    return (
        <div>
            <h1 className="text-2xl  opacity-80 font-bold mb-5">Instructors: {instructors.length}</h1>
            <p className="text-lg opacity-75 mb-5">#Learn from the experienced & skillful instructors </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {instructors.map((instructor) => (
                    <InsCard key={instructor._id} instructor={instructor} />
                ))}
            </div>
        </div>
    );
};

export default Instructor;
