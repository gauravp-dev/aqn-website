import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const SecurityAndBackup = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-[70vh]">
      <div className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="flex flex-col items-start text-left lg:">
          <div className="text-[#0B4D6B] mb-4">
            <FontAwesomeIcon icon={faShieldAlt} size="3x" />
          </div>
          <h2 className="text-4xl font-bold font-montserrat text-[#0B4D6B]">Security</h2>
          <p className="font-montserrat text-[#0B4D6B]">
            Secure sign in with MFA and full data 
            <br /> encryption at rest and transit
          </p>
        </div>
        <div className="hidden md:block lg:gap-6 h-36 border-l border-blue-900"></div>
        <div className="flex flex-col items-start text-left lg:ml-16">
          <div className="text-[#0B4D6B] mb-4">
            <FontAwesomeIcon icon={faCloudUploadAlt} size="3x" />
          </div>
          <h2 className="text-4xl font-bold font-montserrat text-[#0B4D6B]">Backup</h2>
          <p className="font-montserrat text-[#0B4D6B]">
            Automatic multi-region replication,
            <br /> automatic backup, and restore
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityAndBackup;
