const Comment = require('./Comment.js');
const Company = require('./Company.js');
const Event = require('./Event.js');
const Forum = require('./Forum.js');
const Post = require('./Post.js');
const Tag = require('./Tag.js');
const CompanyTag = require('./CompanyTag')
const EventTag = require('./EventTag')
const User = require('./User.js');

Company.hasMany(User, {
    foreignKey: 'company_id',
    onDelete: 'CASCADE'
});

User.belongsTo(Company, {
    foreignKey: 'company_id'
})

module.exports = {
    Comment,
    Company,
    Event,
    Forum,
    Post,
    Tag,
    User
};