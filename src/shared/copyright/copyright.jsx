import '../css/sharedStyles.css';
import { Link } from '@reach/router';

export default function CopyRight() {
  return (
    <div className="copyright">
      <span>Copyright</span>
      <span className="icon">&nbsp;</span>
      <span>Snapbrillia 2022&nbsp;</span>

      <Link to="/policy">Use Policies</Link>
    </div>
  );
}
