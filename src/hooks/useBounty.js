import { useState, useEffect } from 'react';
import * as bountyAPI from '../api/bounty';

import { toast } from 'react-toastify';

export const useBounty = (id) => {

    const [bounty, setBounty] = useState({});
    const [assessment, setAssessment] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadBountyInfo = async (id) => {
        setLoading(true);
        try {
            const currentBounty = await bountyAPI.getBounty(id);
            setBounty(currentBounty)
            const assessment = await bountyAPI.getMyAssessment(id);
            setAssessment(assessment)
        } catch (err) {
            toast(err.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadBountyInfo(id);
      }, [id]);

    return {
        bounty, loading, assessment
    }

}