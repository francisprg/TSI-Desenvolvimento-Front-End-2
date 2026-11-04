export const cartaoResenhaArticle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.25rem',
  padding: '1.5rem',
  border: '1px solid #e3dfd5',
  borderRadius: '0.75rem',
  background: 'white',
};

export const cartaoResenhaCapa = {
  flexShrink: 0,
  width: '6rem',
  aspectRatio: '2 / 3',
  borderRadius: '0.375rem',
  objectFit: 'cover',
};

export const cartaoResenhaInfo = {
  minWidth: 0,
};

export const cartaoResenhaTitulo = {
  marginBottom: '0.5rem',
  fontSize: '1.125rem',
  lineHeight: 1.4,
};

export const cartaoResenhaEstrelas = {
  color: '#916300',
  letterSpacing: '0.125rem',
};

export const cartaoResenhaTexto = {
  margin: '0.75rem 0',
  color: '#5a6a7e',
  lineHeight: 1.65,
  whiteSpace: 'pre-wrap',
  overflowWrap: 'anywhere',
};

export const cartaoResenhaData = {
  display: 'block',
  marginTop: '0.75rem',
  color: '#5a6a7e',
  fontSize: '0.8125rem',
};

export const cartaoResenhaAcoes = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem 1rem',
  marginTop: '1rem',
};

export const botaoAcao = {
  padding: '0.25rem 0',
  border: 0,
  background: 'transparent',
  color: '#16304d',
  font: 'inherit',
  fontSize: '0.875rem',
  cursor: 'pointer',
};

export const cartaoResenhaAcoesDeletar = {
  ...botaoAcao,
  color: '#a33535',
};

export const linkComentarios = {
  ...botaoAcao,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '1rem',
};
