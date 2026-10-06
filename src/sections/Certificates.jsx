import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import CertificateCard from '../components/CertificateCard';
import CertificateModal from '../components/CertificateModal';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#07090e]/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Verified Credentials"
          title="CERTIFICATES & ACHIEVEMENTS"
          subtitle="Official completion certificates and technical masterclasses from recognized organizations including IBM SkillsBuild, WsCube Tech, and NISM (SEBI)."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              index={index}
              onSelect={setSelectedCert}
            />
          ))}
        </div>

        {selectedCert && (
          <CertificateModal
            certificate={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </div>
    </section>
  );
}
