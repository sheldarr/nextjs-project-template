import React from 'react';
import nock from 'nock';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import useGreatOldOnes from '.';

describe('useGreatOldOnes', () => {
  it('should return great old ones', async () => {
    // given
    const someExpectedOldGreatOnes = ['Cthulhu'];
    const queryClient = new QueryClient();
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    nock('http://localhost')
      .get('/api/greatOldOnes')
      .reply(200, someExpectedOldGreatOnes);

    // when
    const { result } = renderHook(() => useGreatOldOnes(), { wrapper });

    // then
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    await waitFor(() =>
      expect(result.current.data).toEqual(someExpectedOldGreatOnes),
    );
  });
});
