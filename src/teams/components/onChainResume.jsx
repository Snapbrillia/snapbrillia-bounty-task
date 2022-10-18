import '../css/teamsOffChainResume.css';

export default function OnChainResume() {
  const handleClickURL = (e) => {
    console.log('URL: clicked!');
  };

  return (
    <div className="container">
      <div className="d-inline-flex align-items-start">
        <input
          className="teams-resume-chain-checkbox"
          type="checkbox"
          id="on-chain-resume"
          name="on-chain-resume"
          value="on-chain-resume"
        />
        <label className="ps-2 semi-bold fs-3" htmlFor="on-chain-resume">
          On-Chain Resume
        </label>
      </div>
      <p className="small-text ps-4">
        Include your On-chain Resume to show off how many bounties you've
        completed successfully. This will show your experience in snapbrillia to
        potential team members and bounty creators.
      </p>
      <span className="invisible"></span>
      <br />
      <span className="text-muted ps-4 text-nowrap">On-Chain Resume URL: </span>
      <span
        onClick={handleClickURL}
        className="teams-resume-cursor-pointer underline"
      >
        www.snapbrillia.com/resumes/dennis-makuyev
      </span>
    </div>
  );
}
