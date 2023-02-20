import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './src/index'
const expect = chai.expect;

chai.use(chaiHttp);


describe('Test the API endpoints', () => {
  let id;

  // Test the POST /api endpoint
  describe('POST /create', () => {
    it('it should POST a new data', async(done) => {
      const data = {
        name: 'Test name',
        dept: 'Dept name'
      };

      await chai.request(app)
        .post('/create')
        .send(data)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('_id');
          expect(res.body).to.have.property('name', data.name);
          expect(res.body).to.have.property('dept', data.dept);
          id = res.body.id;
          done();
        });
    });
  });

  // Test the GET /api/:id endpoint
  describe('GET /fetch/:id', () => {
    it('it should GET a data by the given id', (done) => {
      chai.request(app)
        .get(`/fetch/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('name', data.name);
          expect(res.body).to.have.property('dept', data.dept);
          done();
        });
    });
  });

  // Test the PUT /api/:id endpoint
  describe('PUT /update/:id', () => {
    it('it should UPDATE a data by the given id', (done) => {
      const data = {
        name: 'Test Data',
        dept: 'new name'
      };

      chai.request(app)
        .put(`/update/${id}`)
        .send(data)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('name', data.name);
          expect(res.body).to.have.property('dept', data.dept);
          done();
        });
    });
  });

  // Test the DELETE /api/:id endpoint
  describe('DELETE /delete/:id', () => {
    it('it should DELETE a data by the given id', (done) => {
      chai.request(app)
        .delete(`/delete/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });
  });

  // Test the GET /api/:id endpoint after delete
  describe('GET /api/:id after delete', () => {
    it('it should return 404 after deleting data', (done) => {
      chai.request(app)
        .get(`/api/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
 
  })

})