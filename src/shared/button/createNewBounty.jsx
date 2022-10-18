import '../css/buttonStyles.css';

export default function CreateNewBountyButton() {
  const goToB2B = () => {
    window.open(`${process.env.REACT_APP_B2B_URL}/bounties`, '_blank');
  }
  return (
    <div>
      <button className="btn-primary" onClick={() => goToB2B()}>Create New Gig</button>
    </div>
  );
}
