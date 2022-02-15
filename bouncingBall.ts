function bouncingBall(h: number, bounce: number, window: number): number {
  let cond = h > 0 && bounce > 0 && bounce < 1 && window < h;
  if (cond) {
    return h < window ? -1 : 2 + bouncingBall(h * bounce, bounce, window);
  }
  return -1;
}

console.log(bouncingBall(30.0, 0.66, 1.5));

function bouncingBall2(h: number, bounce: number, window: number): number {
  let result = 1;
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let firstFalling = h * bounce;
    for (let i = firstFalling; i >= window; i *= bounce) {
      result += 2;
    }
    return result;
  }
  return -1;
}

console.log(bouncingBall2(3.0, 0.66, 1.5));
