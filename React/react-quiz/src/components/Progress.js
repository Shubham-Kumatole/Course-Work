function Progress({ index, numQuestions, points, totalPoints }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>

      <p>
        Points <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;
