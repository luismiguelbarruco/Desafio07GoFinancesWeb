const formatDate = (value: Date): string => {
  const d = new Date(value);
  const df = new Intl.DateTimeFormat('pt');
  return df.format(d);
};

export default formatDate;
