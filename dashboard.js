let m_open, m_close, m_board;
m_open = document.getElementById('menu-open');
m_close = document.getElementById('menu-close');
m_board = document.getElementById('menu-board');

m_open.addEventListener('click', () => {
	m_board.style.display = 'block';
});
m_close.addEventListener('click', () => {
	m_board.style.display = 'none';
});
