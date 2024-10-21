'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { MapPin, Users, Briefcase } from 'lucide-react';

interface UserData {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    location: string;
    public_repos: number;
    followers: number;
    following: number;
    company: string;
}

export function UserProfile({ username }: { username: string }) {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (!response.ok) {
                    throw new Error('User not found');
                }
                const data = await response.json();
                setUserData(data);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                setLoading(false);
            }
        };

        fetchUserData();
    }, [username]);

    if (loading) {
        return <UserProfileSkeleton />;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!userData) {
        return null;
    }

    return (
        <Card className="mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-20 w-20">
                    <AvatarImage src={userData.avatar_url} alt={userData.name || userData.login} />
                    <AvatarFallback>{userData.login.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle>{userData.name || userData.login}</CardTitle>
                    <p className="text-sm text-muted-foreground">@{userData.login}</p>
                </div>
            </CardHeader>
            <CardContent>
                {userData.bio && <p className="mb-4">{userData.bio}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userData.location && (
                        <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4" />
                            <span>{userData.location}</span>
                        </div>
                    )}
                    {userData.company && (
                        <div className="flex items-center">
                            <Briefcase className="mr-2 h-4 w-4" />
                            <span>{userData.company}</span>
                        </div>
                    )}
                    <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        <span>{userData.followers} followers · {userData.following} following</span>
                    </div>
                    <div>
                        <span className="font-semibold">{userData.public_repos}</span> public repositories
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function UserProfileSkeleton() {
    return (
        <Card className="mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
                <Skeleton className="h-20 w-20 rounded-full" />
                <div>
                    <Skeleton className="h-6 w-40 mb-2" />
                    <Skeleton className="h-4 w-32" />
                </div>
            </CardHeader>
            <CardContent>
                <Skeleton className="h-4 w-full mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </div>
            </CardContent>
        </Card>
    );
}