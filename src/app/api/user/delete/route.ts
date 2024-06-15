import { connect } from '@/app/dbConfig/dbConfig';
import User from "@/app/models/UserModels"
import { NextApiRequest, NextApiResponse } from 'next';

connect();

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
