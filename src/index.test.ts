import { useOnline } from './';
import { renderHook } from '@testing-library/react-hooks';

describe('useOnline', () => {
  it('should return false when online status is false', () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);
    const { result } = renderHook(() => useOnline());
    expect(result.current).toBe(false);
  });

  it('should return true when online status is true', () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);
    const { result } = renderHook(() => useOnline());
    expect(result.current).toBe(true);
  });
});
