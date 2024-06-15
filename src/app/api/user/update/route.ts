import { connect } from '@/app/dbConfig/dbConfig';
import UsersManagers from '@/app/models/UserManager';
import { NextApiRequest, NextApiResponse } from 'next';

connect();

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const user = await UsersManagers.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
