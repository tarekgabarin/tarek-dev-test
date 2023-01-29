import { useState, useEffect } from 'react';
import students from '../data/students.json';

const useFetchStudents = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(students);
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return { data };
};

export default useFetchStudents;