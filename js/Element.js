class Element {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  
  coords() {
		let edges = {
			't': this.y + this.height,
			'r': this.x + this.width,
			'b': this.y,
			'l': this.x
		};
		let corners = {
			'tl': [edges.l, edges.t],
			'tr': [edges.r, edges.t],
			'bl': [edges.l, edges.b],
			'br': [edges.r, edges.b]
		};
		return {...edges, ...corners};
  }
  
	coords(c) {
		return this.coords()[c]
	}
	inCollisionWith(el) {
		let thisc = this.coords();
		let elc = el.coords();
		let inCollision =!(
			thisc.r <= elc.l ||
			thisc.l >= elc.r ||
			thisc.t <= elc.b ||
			thisc.b >= elc.t
			)
		return inCollision
	}
  
}