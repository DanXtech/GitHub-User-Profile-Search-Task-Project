import { UserProfile } from '@/components/user-profile';
import { RepositoryList } from '@/components/repository-list';
// import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function UserPage({ params }: { params: { username: string } }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="flex justify-between items-center mb-8">
                <Link href="/">
                    <Button className='cursor-pointer bg-slate-800 text-white'>
                        <Home className="mr-2 h-4 w-4" /> Home
                    </Button>
                </Link>
                {/* <ThemeToggle /> */}
            </header>
            <main>
                <UserProfile username={params.username} />
                <RepositoryList username={params.username} />
            </main>
        </div>
    );
}