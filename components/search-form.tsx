'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function SearchForm() {
    const [username, setUsername] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username.trim()) {
            router.push(`/user/${username}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-grow"
            />
            <Button type="submit" className='bg-slate-800 text-white '>
                <Search className="mr-2 h-4 w-4" /> Search
            </Button>
        </form>
    );
}