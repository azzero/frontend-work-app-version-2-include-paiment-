import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Label,
  Dropdown,
  Segment
} from 'semantic-ui-react';
const institutionOptions = [
  {
    value: 'نظارة اسفي',
    text: 'نظارة  آسفي ',
    key: '1'
  },
  {
    value: 'مندوبية اسفي',
    text: 'مندوبية آسفي',
    key: '2'
  },
  {
    value: 'مندوبية اليوسفية',
    text: 'مندوبية اليوسفية',
    key: '3'
  }
];
const accountOptions = [
  {
    value: 'عام',
    text: '  عام ',
    key: '1'
  },
  {
    value: 'خاص',
    text: 'خاص',
    key: '2'
  },
  {
    value: 'شساعة',
    text: '  الشساعة ',
    key: '3'
  }
];
class EditEngagement extends Component {
  constructor(props) {
    super(props);
    const id = this.props.params.id;
    this.props.engagements.forEach(engagement => {
      // eslint-disable-next-line
      if (engagement.id == id) {
        // eslint-disable-next-line
        this.state = engagement;
      }
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.props.updateEngagement(
      this.state.id,
      this.state.receptionNumber,
      this.state.reception,
      this.state.tanzil,
      this.state.prix,
      this.state.institution,
      this.state.accountType,
      this.state.title,
      this.state.owner,
      this.state.visaNumber,
      this.state.visaDate
    );
  }
  render() {
    if (this.props.engagement)
      return (
        <div>
          <Grid columns={3} divided textAlign='right'>
            <Grid.Row textAlign='right'>
              <Grid.Column></Grid.Column>
              <Grid.Column>
                <Segment>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <Label> رقم الوارد </Label>
                      <input
                        name='receptionNumber'
                        value={this.state.receptionNumber}
                        onChange={e =>
                          this.setState({ receptionNumber: e.target.value })
                        }
                        placeholder='receptionNumber'
                      />
                    </Form.Field>
                    <Form.Field>
                      <Label> تاريخ الوارد </Label>
                      <input
                        type='date'
                        name='reception'
                        value={this.state.reception}
                        onChange={e =>
                          this.setState({ reception: e.target.value })
                        }
                        placeholder='reception'
                      />
                    </Form.Field>
                    <Form.Field>
                      <Label> التنزيل المالي </Label>
                      <input
                        name='tanzil'
                        value={this.state.tanzil}
                        onChange={e =>
                          this.setState({ tanzil: e.target.value })
                        }
                        placeholder='تنزيل'
                      />
                    </Form.Field>
                    <Form.Field>
                      <Label> مبلغ الإلتزام </Label>
                      <input
                        name='prix'
                        value={this.state.prix}
                        onChange={e => this.setState({ prix: e.target.value })}
                        placeholder='مبلغ الالتزام'
                      />
                    </Form.Field>
                    <Form.Field>
                      <Label>المؤسسة</Label>
                      <Dropdown
                        search
                        selection
                        value={this.state.institution}
                        options={institutionOptions}
                        onChange={(data, event) =>
                          this.setState({ institution: event.value })
                        }
                      />
                    </Form.Field>
                    <Form.Field>
                      <Label>نوع الحساب</Label>
                      <Dropdown
                        search
                        selection
                        value={this.state.accountType}
                        options={accountOptions}
                        onChange={(data, event) =>
                          this.setState({ accountType: event.value })
                        }
                      />
                    </Form.Field>
                    <Form.Field>
                      <Label>عنوان الإلتزام</Label>
                      <input
                        name='title'
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })}
                        placeholder='العنوان'
                      />
                    </Form.Field>

                    <Form.Field>
                      <Label>اسم المستفيد </Label>
                      <input
                        name='owner'
                        value={this.state.owner}
                        onChange={e => this.setState({ owner: e.target.value })}
                        placeholder='المستفيد'
                      />
                    </Form.Field>

                    <Form.Field>
                      <Label> التأشيرة عدد</Label>
                      <input
                        name='visaNumber'
                        value={this.state.visaNumber}
                        onChange={e =>
                          this.setState({ visaNumber: e.target.value })
                        }
                        placeholder=' التاشيرة عدد'
                      />
                    </Form.Field>
                    <Form.Field>
                      <Label>تاريخ التأشيرة</Label>

                      <input
                        type='date'
                        name='visaDate'
                        value={this.state.visaDate}
                        onChange={e =>
                          this.setState({ visaDate: e.target.value })
                        }
                        placeholder='تاريخ التاشيرة'
                      />
                    </Form.Field>
                    <Button color='blue' type='submit'>
                      عدل
                    </Button>
                  </Form>
                </Segment>
              </Grid.Column>

              <Grid.Column></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
  }
}
export default EditEngagement;
