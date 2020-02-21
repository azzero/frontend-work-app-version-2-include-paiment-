import React, { Component } from 'react';
import {
  Button,
  Form,
  Label,
  Grid,
  Dropdown,
  Message,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router';
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
export default class AddEngagement extends Component {
  constructor(props) {
    super(props);
    const id = this.props.params.id;
    this.props.payments.forEach(payment => {
      // eslint-disable-next-line
      if (payment.id == id) {
        // eslint-disable-next-line
        this.state = { ...payment, visaCheck: true };
      }
    });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVisa = this.handleVisa.bind(this);
  }

  handleSubmit(e) {
    this.props.updatePayment(
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
      this.state.visaDate,
      this.state.dateVirement
    );
  }
  handleVisa(e) {
    this.setState({ visaNumber: e.target.value });
    const engagements = this.props.engagements;
    this.setState({ visaCheck: false });

    engagements.forEach(element => {
      // eslint-disable-next-line
      if (element.visaNumber == e.target.value) {
        this.setState({ visaCheck: true });
      }
    });
    return;
  }
  render() {
    return (
      <Segment>
        <Grid columns={2} divided textAlign='right'>
          <Grid.Row textAlign='right'>
            <Grid.Column floated='right' width={12}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <Label>الوارد عدد</Label>
                  <input
                    value={this.state.receptionNumber}
                    name='receptionNumber'
                    onChange={e =>
                      this.setState({ receptionNumber: e.target.value })
                    }
                    placeholder='الوارد عدد'
                  />
                </Form.Field>
                <Form.Field>
                  <Label>الوارد </Label>
                  <input
                    value={this.state.reception}
                    name='reception'
                    type='date'
                    onChange={e => this.setState({ reception: e.target.value })}
                    placeholder='الوارد'
                  />
                </Form.Field>
                <Form.Field>
                  <Label>التنزيل المالي</Label>
                  <input
                    value={this.state.tanzil}
                    name='tanzil'
                    onChange={e => this.setState({ tanzil: e.target.value })}
                    placeholder='التنزيل المالي'
                  />
                </Form.Field>
                <Form.Field>
                  <Label>مبلغ الالتزام</Label>
                  <input
                    value={this.state.prix}
                    name='prix'
                    onChange={e => this.setState({ prix: e.target.value })}
                    placeholder='مبلغ الالتزام'
                  />
                </Form.Field>

                <Form.Field>
                  <Label>الإدارة</Label>
                  <Dropdown
                    placeholder='المؤسسة'
                    search
                    selection
                    defaultValue={this.state.institution}
                    options={institutionOptions}
                    onChange={(data, event) =>
                      this.setState({ institution: event.value })
                    }
                  />
                </Form.Field>

                <Form.Field>
                  <Label>نوع الحساب</Label>
                  <Dropdown
                    placeholder='اختر نوع الحساب'
                    search
                    selection
                    defaultValue={this.state.accountType}
                    options={accountOptions}
                    onChange={(data, event) =>
                      this.setState({ accountType: event.value })
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <Label>موضوع الالتزام</Label>
                  <Form.TextArea
                    type='text'
                    value={this.state.title}
                    name='title'
                    onChange={e => this.setState({ title: e.target.value })}
                    placeholder='ما هو مو ضوع هذا الالتزام'
                  />
                </Form.Field>
                <Form.Field>
                  <Label> المستفيد </Label>
                  <input
                    value={this.state.owner}
                    name='owner'
                    onChange={e => this.setState({ owner: e.target.value })}
                    placeholder='لمن سيحول مبلغ هذا الالتزام'
                  />
                </Form.Field>

                <Form.Field>
                  <Label> تأشيرة عدد</Label>
                  <input
                    value={this.state.visaNumber}
                    name='visaNumber'
                    onChange={this.handleVisa}
                    placeholder='تأشيرة عدد'
                  />
                  {this.state.visaCheck ? (
                    ''
                  ) : (
                    <Message negative>
                      <Message.Header> تنبيه </Message.Header>
                      <p>لا توجد أي تأشيرة بهذا العدد </p>
                    </Message>
                  )}
                </Form.Field>
                <Form.Field>
                  <Label>تاريخ التأشيرة</Label>
                  <input
                    value={this.state.visaDate}
                    type='date'
                    name='visaDate'
                    onChange={e => this.setState({ visaDate: e.target.value })}
                    placeholder='تاريخ التأشير'
                  />
                </Form.Field>
                <Form.Field>
                  <Label>تاريخ التحويل</Label>
                  <input
                    value={this.state.dateVirement}
                    type='date'
                    name='dateVirement'
                    onChange={e =>
                      this.setState({ dateVirement: e.target.value })
                    }
                    placeholder='تاريخ التحويل'
                  />
                </Form.Field>
                <Button.Group>
                  <Link to='/payments'>
                    <Button>رجوع</Button>
                  </Link>
                  <Button.Or />
                  <Button positive type='submit'>
                    إحفظ
                  </Button>
                </Button.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
