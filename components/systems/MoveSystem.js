export const MoveSystem = (entities, { events, dispatch }) => {
  const character = entities.character;

  events?.forEach(event => {
    if (event.type === 'move-left') {
      character.position[0] -= 10;
      character.direction = 'left';
    } else if (event.type === 'move-right') {
      character.position[0] += 10;
      character.direction = 'right';
    } else if (event.type === 'move-up') {
      character.position[1] -= 10;
      character.direction = 'up';
    } else if (event.type === 'move-down') {
      character.position[1] += 10;
      character.direction = 'down';
    }
  });

  // 감정기록 컴퓨터 영역 접근 시 팝업
  const [x, y] = character.position;
  if (x >= 220 && x <= 280 && y >= 90 && y <= 160 && !character.nearEmotionZone) {
    dispatch({ type: 'show-popup', target: 'emotion-record' });
    character.nearEmotionZone = true;
  }

  // 감정기록 존 벗어남
  if ((x < 220 || x > 280 || y < 90 || y > 160) && character.nearEmotionZone) {
    dispatch({ type: 'hide-popup' });
    character.nearEmotionZone = false;
  }

  // 포털 진입 (예: 우측 상단)
  if (x >= 300 && y <= 50) {
    dispatch({ type: 'go-to', target: 'EmotionRecord' });
  }

  return entities;
};
