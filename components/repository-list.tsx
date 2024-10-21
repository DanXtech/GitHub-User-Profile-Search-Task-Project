'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, GitFork, ExternalLink } from 'lucide-react';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
}

export function RepositoryList({ username }: { username: string }) {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos?page=${page}&per_page=10&sort=updated`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                setRepositories((prevRepos) => [...prevRepos, ...data]);
                setHasMore(data.length === 10);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                setLoading(false);
            }
        };

        fetchRepositories();
    }, [username, page]);

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    if (loading && page === 1) {
        return <RepositoryListSkeleton />;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Repositories</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {repositories.map((repo) => (
                    <Card key={repo.id}>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>{repo.name}</span>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                                {repo.description || 'No description provided'}
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <Star className="mr-1 h-4 w-4" />
                                    <span>{repo.stargazers_count}</span>
                                </div>
                                <div className="flex items-center">
                                    <GitFork className="mr-1 h-4 w-4" />
                                    <span>{repo.forks_count}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {hasMore && (
                <div className="mt-4 text-center">
                    <Button onClick={loadMore} disabled={loading} className='bg-slate-800 text-white cursor-pointer'>
                        {loading ? 'Loading...' : 'Load More'}
                    </Button>
                </div>
            )}
        </div>
    );
}

function RepositoryListSkeleton() {
    return (
        <div>
            <Skeleton className="h-8 w-40 mb-4" />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {[...Array(4)].map((_, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <Skeleton className="h-6 w-3/4" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-full mb-4" />
                            <div className="flex items-center space-x-4">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}