// app/dashboard/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin'); // Redirect to sign-in if not authenticated
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>Welcome to the Dashboard, {session.user?.name}!</h1>
    </div>
  );
}
