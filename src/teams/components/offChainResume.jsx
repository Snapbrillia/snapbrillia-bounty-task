import '../css/teamsOffChainResume.css';

export default function OffChainResume() {
  const handleClickChooseNewFile = (e) => {
    console.log('choose new file: clicked!');
  };

  return (
    <div className="container">
      <div className="d-inline-flex align-items-start">
        <input
          className="teams-resume-chain-checkbox"
          type="checkbox"
          id="off-chain-resume"
          name="off-chain-resume"
          value="off-chain-resume"
        />
        <label className="ps-2 semi-bold fs-3" htmlFor="off-chain-resume">
          Off-Chain Resume
        </label>
      </div>
      <p className="small-text ps-4">
        Include your Off-Chain Resume to bolster your credentials amongst your
        peers. Showing off your experience and education will help you gather
        mentees and get accepted for more bounties.
      </p>
      <span
        onClick={handleClickChooseNewFile}
        className="teams-resume-cursor-pointer underline ps-4"
      >
        Choose new file
      </span>
      <br />
      <span className="text-muted ps-4 text-nowrap">
        Off-Chain Resume on file:{' '}
      </span>
      <span className="underline">current_file_name.pdf</span>
    </div>
  );
}
