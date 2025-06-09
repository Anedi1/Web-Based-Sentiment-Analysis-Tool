test('renders hello message', () => {
  render(<App />);
  const heading = screen.getByText(/hello, world!/i);
  expect(heading).toBeInTheDocument();
});
