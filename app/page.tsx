import { SearchForm } from '@/components/search-form';
// import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">GitHub User Search</h1>
                {/* <ThemeToggle /> */}
            </header>
            <main>
                <SearchForm />
            </main>
        </div>
    );
}