import { render, screen, within } from '@testing-library/react-native';
import RepositoryItem from '../../../RepositoryItem';



// expect something from the first and the second repository item
describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            render(<RepositoryItem item={repositories.edges[0].node} setShowItem={true} />);

            // screen.debug();
            let repositoryItems = screen.getAllByTestId('repositoryItem');
            const [firstRepositoryItem] = repositoryItems;

            // Verify first repository item
            expect(within(firstRepositoryItem).getByText('fullName:jaredpalmer/formik')).toBeTruthy();
            expect(within(firstRepositoryItem).getByText('description:Build forms in React, without the tears')).toBeTruthy();
            expect(within(firstRepositoryItem).getByText('language:TypeScript')).toBeTruthy();
            expect(within(firstRepositoryItem).getByText('stargazersCount:21856')).toBeTruthy();
            expect(within(firstRepositoryItem).getByText('reviewCount:3')).toBeTruthy();
            expect(within(firstRepositoryItem).getByText('ratingAverage:88')).toBeTruthy();

            render(<RepositoryItem item={repositories.edges[1].node} setShowItem={true} />);
            // screen.debug();
            repositoryItems = screen.getAllByTestId('repositoryItem');
            const [secondRepositoryItem] = repositoryItems;

            // Verify second repository item
            expect(within(secondRepositoryItem).getByText('fullName:async-library/react-async')).toBeTruthy();
            expect(within(secondRepositoryItem).getByText('description:Flexible promise-based React data loader')).toBeTruthy();
            expect(within(secondRepositoryItem).getByText('language:JavaScript')).toBeTruthy();
            expect(within(secondRepositoryItem).getByText('stargazersCount:1760')).toBeTruthy();
            expect(within(secondRepositoryItem).getByText('reviewCount:3')).toBeTruthy();
            expect(within(secondRepositoryItem).getByText('ratingAverage:72')).toBeTruthy();
        });
    });
}); 